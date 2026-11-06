import { PrismaClient, Role, StallCategory, StallStatus } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding FESTORA 2027 database...')

  // Create Super Admin
  const passwordHash = await bcrypt.hash('Festora@2027', 12)
  
  const admin = await prisma.user.upsert({
    where: { email: 'sanskrutihongekar@gmail.com' },
    update: {},
    create: {
      name: 'Sanskruti Hongekar',
      email: 'sanskrutihongekar@gmail.com',
      passwordHash,
      role: Role.SUPER_ADMIN,
      phone: '+91 12345567789',
    },
  })
  console.log('✅ Super Admin created:', admin.email)

  // Event Config
  await prisma.eventConfig.upsert({
    where: { id: 'default-config' },
    update: {},
    create: {
      id: 'default-config',
      eventName: 'FESTORA',
      fullTitle: 'The Grand Food & Carnival Festival',
      tagline: 'One Festival. Endless Experiences.',
      description: `FESTORA 2027 is a four-day grand food, shopping, and entertainment festival bringing together delicious flavours, exciting shopping experiences, and unlimited fun under one roof. Organised at CPED Ground, Club Road, Belagavi from 12th to 15th January 2027, FESTORA creates a vibrant platform for food lovers, shopping enthusiasts, local entrepreneurs, families, and visitors of all age groups. Featuring 50 exclusive stalls (25 food, 25 shopping), live chef demonstrations, cooking competitions for kids and adults, interactive games, photo booths, live music, and dance performances.`,
      category: 'Food Festival, Shopping Exhibition & Family Carnival',
      startDate: new Date('2027-01-12T00:00:00+05:30'),
      endDate: new Date('2027-01-15T23:59:59+05:30'),
      operatingHours: '10:00 AM to 10:00 PM IST (Daily)',
      venueName: 'CPED Ground',
      venueAddress: 'Club Road, Belagavi, Karnataka 590001',
      organizerName: 'Sanskruti Hongekar',
      organizerEmail: 'sanskrutihongekar@gmail.com',
      organizerPhone: '+91 12345567789',
      primaryColor: '#DC2626',
      secondaryColor: '#F59E0B',
      isPublished: true,
    },
  })
  console.log('✅ Event configuration seeded')

  // SPOCs
  const spocs = [
    {
      name: 'Stall Operations Desk',
      designation: 'Stall Manager',
      email: 'sanskrutihongekar@gmail.com',
      phone: '+91 12345567789',
      whatsapp: '+9112345567789',
      category: 'Food & Shopping Stalls',
    },
    {
      name: 'Culinary Competition Team',
      designation: 'Competition Coordinator',
      email: 'sanskrutihongekar@gmail.com',
      phone: '+91 12345567789',
      whatsapp: '+9112345567789',
      category: 'Cooking Competitions',
    },
    {
      name: 'Artist Management Desk',
      designation: 'Entertainment Manager',
      email: 'sanskrutihongekar@gmail.com',
      phone: '+91 12345567789',
      whatsapp: '+9112345567789',
      category: 'Stage & Performers',
    },
    {
      name: 'Visitor Relations Desk',
      designation: 'Registration Head',
      email: 'sanskrutihongekar@gmail.com',
      phone: '+91 12345567789',
      whatsapp: '+9112345567789',
      category: 'General Entry & Passes',
    },
  ]

  for (const spoc of spocs) {
    await prisma.sPOC.create({ data: spoc })
  }
  console.log('✅ SPOCs seeded')

  // Stalls - 25 Food + 25 Shopping
  for (let i = 1; i <= 25; i++) {
    await prisma.stall.create({
      data: {
        stallNumber: `F-${i.toString().padStart(2, '0')}`,
        name: `Food Stall ${i}`,
        category: StallCategory.FOOD,
        status: StallStatus.AVAILABLE,
        zone: 'Zone A – Food Street',
        dailyRent: 5000,
      },
    })
  }
  for (let i = 1; i <= 25; i++) {
    await prisma.stall.create({
      data: {
        stallNumber: `S-${i.toString().padStart(2, '0')}`,
        name: `Shopping Stall ${i}`,
        category: StallCategory.SHOPPING,
        status: StallStatus.AVAILABLE,
        zone: 'Zone B – Shopping Boulevard',
        dailyRent: 4000,
      },
    })
  }
  console.log('✅ 50 Stalls seeded')

  // Schedule items
  const schedule = [
    { day: 1, date: new Date('2027-01-12'), startTime: '10:00 AM', title: 'Carnival Opens', category: 'General', zone: 'Main Entrance' },
    { day: 1, date: new Date('2027-01-12'), startTime: '11:00 AM', title: 'Inauguration & Lamp Lighting', category: 'Ceremony', zone: 'Zone F – Entertainment Stage' },
    { day: 1, date: new Date('2027-01-12'), startTime: '02:30 PM', endTime: '04:00 PM', title: 'Demo 1: Roots & Recipes', description: 'Jolada rotti, ennegayi, zunka, local delicacies, regional food heritage.', category: 'Demo', zone: 'Zone D – Cooking Studio' },
    { day: 1, date: new Date('2027-01-12'), startTime: '05:00 PM', title: 'Dance Academies Performance', category: 'Performance', zone: 'Zone F – Entertainment Stage' },
    { day: 1, date: new Date('2027-01-12'), startTime: '08:00 PM', title: 'Live Band: Flavours of Music', category: 'Performance', zone: 'Zone F – Entertainment Stage' },
    { day: 2, date: new Date('2027-01-13'), startTime: '11:30 AM', title: 'Little MasterChef Duo Competition', description: 'Kids 7-12 yrs, No-fire cooking, 45 mins.', category: 'Competition', zone: 'Zone E – Competition Arena' },
    { day: 2, date: new Date('2027-01-13'), startTime: '03:00 PM', endTime: '04:30 PM', title: 'Demo 2: The Fusion Kitchen', description: 'Fusion chaat, millet pizza, Indo-Italian innovative snacks.', category: 'Demo', zone: 'Zone D – Cooking Studio' },
    { day: 2, date: new Date('2027-01-13'), startTime: '06:00 PM', title: 'Sufi & Unplugged Night', category: 'Performance', zone: 'Zone F – Entertainment Stage' },
    { day: 2, date: new Date('2027-01-13'), startTime: '09:00 PM', title: 'Kids Prize Distribution', category: 'Ceremony', zone: 'Zone F – Entertainment Stage' },
    { day: 3, date: new Date('2027-01-14'), startTime: '12:00 PM', title: 'Ultimate Chef Duo Competition', description: 'Adults 18+ yrs, Fire cooking, 60-75 mins.', category: 'Competition', zone: 'Zone E – Competition Arena' },
    { day: 3, date: new Date('2027-01-14'), startTime: '03:30 PM', endTime: '05:00 PM', title: 'Demo 3: Sweet Sensations', description: 'Chocolate making, cake decoration, dessert plating, no-bake jars.', category: 'Demo', zone: 'Zone D – Cooking Studio' },
    { day: 3, date: new Date('2027-01-14'), startTime: '06:00 PM', title: 'Belagavi Dance Showcase', category: 'Performance', zone: 'Zone F – Entertainment Stage' },
    { day: 3, date: new Date('2027-01-14'), startTime: '07:30 PM', title: 'Live Bollywood Music', category: 'Performance', zone: 'Zone F – Entertainment Stage' },
    { day: 4, date: new Date('2027-01-15'), startTime: '12:00 PM', title: 'Stall Voting Begins', category: 'General', zone: 'All Zones' },
    { day: 4, date: new Date('2027-01-15'), startTime: '04:00 PM', title: 'Stall Judging', category: 'Ceremony', zone: 'Zone F – Entertainment Stage' },
    { day: 4, date: new Date('2027-01-15'), startTime: '06:30 PM', title: 'DJ & Carnival Beats', category: 'Performance', zone: 'Zone F – Entertainment Stage' },
    { day: 4, date: new Date('2027-01-15'), startTime: '08:00 PM', title: 'Best Food & Shopping Stall Awards', category: 'Ceremony', zone: 'Zone F – Entertainment Stage' },
    { day: 4, date: new Date('2027-01-15'), startTime: '09:00 PM', title: 'Grand Finale', category: 'Ceremony', zone: 'Zone F – Entertainment Stage' },
  ]

  for (const [index, item] of schedule.entries()) {
    await prisma.scheduleItem.create({
      data: { ...item, sortOrder: index },
    })
  }
  console.log('✅ Schedule seeded')

  // Competition slots
  await prisma.competitionSlot.createMany({
    data: [
      { competitionType: 'LITTLE_MASTERCHEF', day: new Date('2027-01-13'), maxTeams: 25, isOpen: true },
      { competitionType: 'ULTIMATE_CHEF', day: new Date('2027-01-14'), maxTeams: 20, isOpen: true },
    ],
  })
  console.log('✅ Competition slots seeded')

  // Sample performers
  await prisma.performer.createMany({
    data: [
      { name: 'Flavours of Music Band', type: 'Live Band', performanceDay: 1, startTime: '08:00 PM', isFeatured: true },
      { name: 'Sufi Soul Collective', type: 'Sufi & Unplugged', performanceDay: 2, startTime: '06:00 PM', isFeatured: true },
      { name: 'Belagavi Dance Ensemble', type: 'Dance', performanceDay: 3, startTime: '06:00 PM', isFeatured: true },
      { name: 'Carnival DJ Crew', type: 'DJ', performanceDay: 4, startTime: '06:30 PM', isFeatured: true },
    ],
  })
  console.log('✅ Performers seeded')

  // Page contents
  await prisma.pageContent.createMany({
    data: [
      {
        slug: 'privacy-policy',
        title: 'Privacy Policy',
        content: `# Privacy Policy\n\nFESTORA 2027 respects your privacy. We collect only necessary registration data to manage tickets, communications, and event operations. Data is stored securely and not shared with third parties except for essential service providers (email, payment). Contact sanskrutihongekar@gmail.com for any data requests.`,
        isPublished: true,
      },
      {
        slug: 'about',
        title: 'About FESTORA',
        content: `FESTORA 2027 is Belagavi's premier four-day food, shopping and carnival festival...`,
        isPublished: true,
      },
    ],
  })
  console.log('✅ Page content seeded')

  console.log('🎉 Seeding completed successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
