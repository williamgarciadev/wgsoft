import 'dotenv/config';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const profile = await prisma.profile.create({
    data: {
      name: 'Geovanny García',
      title: 'Ingeniero de Sistemas',
      location: 'Bogotá, Distrito Capital, Colombia',
      email: 'wigamu@hotmail.com',
      linkedin: 'https://www.linkedin.com/in/geovanny-garcía/',
      summary:
        'Ingeniero industrial y de sistemas con más de 4 años de experiencia en desarrollo de aplicaciones móviles y web usando GeneXus (16–18). Experiencia en C#, Java y JavaScript; bases de datos SQL Server, PostgreSQL y Oracle; y servidores IIS, Tomcat y WebLogic.',
      experiences: {
        create: [
          {
            company: 'Banco Contactar',
            role: 'Ingeniero de desarrollo de software',
            location: 'Bogotá, Colombia',
            startDate: '2024-04',
            endDate: 'Presente',
            description:
              'Desarrollo y mantenimiento de soluciones bancarias con GeneXus 16–18 y core Bantotal. Diseño e implementación de sistemas locales de Impuestos, Tesorería y Cumplimiento Regulatorio en GeneXus 18 Nativo.'
          },
          {
            company: 'AOS Colombia',
            role: 'Desarrollador GeneXus',
            location: 'Bogotá, Colombia',
            startDate: '2022-01',
            endDate: '2022-11',
            description: 'Implementación de core bancario Bantotal con GeneXus.'
          },
          {
            company: 'everis',
            role: 'Analista de soluciones',
            location: 'Bogotá, Colombia',
            startDate: '2020-06',
            endDate: '2021-08',
            description:
              'Análisis y desarrollo de funcionalidades web en GeneXus 16. Pruebas unitarias, corrección de bugs, despliegue en preproducción (IIS 10), documentación de cambios.'
          },
          {
            company: 'GrupoTX',
            role: 'Desarrollador GeneXus',
            location: 'Bogotá, Colombia',
            startDate: '2019-02',
            endDate: '2020-06',
            description:
              'Desarrollo de funcionalidades, pruebas, corrección de bugs, documentación técnica, participación en comités de arquitectura y control de versionamiento.'
          },
          {
            company: 'Departamento Administrativo de la Presidencia de la República',
            role: 'Profesional Especializado',
            location: 'Bogotá, Colombia',
            startDate: '2012-12',
            endDate: '2019-02',
            description:
              'Coordinación de espacios de diálogo territorial, seguimiento de compromisos y apoyo a implementación de políticas y programas del Gobierno Nacional.'
          },
          {
            company: 'Decibeles S.A.',
            role: 'Ingeniero Control Interno',
            location: 'Bogotá, Colombia',
            startDate: '2009-07',
            endDate: '2012-03',
            description: ''
          }
        ]
      },
      education: {
        create: [
          {
            institution: 'Universidad Piloto de Colombia',
            degree: 'Ingeniero de Sistemas',
            field: 'Ingeniería de sistemas',
            startYear: '2017',
            endYear: '2022'
          },
          {
            institution: 'Toolnology Colombia',
            degree: 'Analista Junior GeneXus 15',
            field: 'Programación informática',
            startYear: '2016',
            endYear: '2016'
          },
          {
            institution: 'Fundación Universitaria INPAHU',
            degree: 'Tecnólogo en Sistemas',
            field: 'Ingeniería de sistemas',
            startYear: '2011',
            endYear: '2013'
          },
          {
            institution: 'Pontificia Universidad Javeriana',
            degree: 'ISO 9001 2008',
            field: 'Diplomado',
            startYear: '2010',
            endYear: '2010'
          },
          {
            institution: 'Universidad Libre de Colombia',
            degree: 'Ingeniero industrial',
            field: 'Ingeniería industrial',
            startYear: '1997',
            endYear: '2004'
          }
        ]
      },
      skills: {
        create: [
          { name: 'Spring Framework' },
          { name: 'Spring Boot' },
          { name: 'Microsoft Excel' },
          { name: 'GeneXus 17' },
          { name: 'GeneXus 18' },
          { name: 'GeneXus 15' },
          { name: 'C#' },
          { name: 'Java' },
          { name: 'JavaScript' },
          { name: 'SQL Server' },
          { name: 'PostgreSQL' },
          { name: 'Oracle' },
          { name: 'IIS' },
          { name: 'Tomcat' },
          { name: 'WebLogic' }
        ]
      },
      certifications: {
        create: [
          { name: 'Analista Junior GeneXus 17' },
          { name: 'GeneXus 18 Junior Analyst' },
          { name: 'Spring Framework Foundations' },
          { name: 'Analista Junior GeneXus 15' },
          { name: 'GeneXus 18 Analyst' }
        ]
      }
    }
  });

  console.log('Seeded profile:', profile.id);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
