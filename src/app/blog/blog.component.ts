import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html'
})
export class BlogComponent implements OnInit {

  author: any = { image: '/assets/images/jimmy.jpg', name: 'James McGill', description: 'Attorney, Specialised in elder law with a penchant for adventure.', degree: 'B.A LLB (University of New Mexico)' }
  article: any = {
    header: 'Criminal Municipal Courts',
    content: "Municipal courts are the lowest and least scrutinized echelon of the U.S. criminal system. Largely ignored by judicial theorists, municipal governance scholarship, and criminal theory alike, these city-controlled courts operate on the intellectual sidelines; even basic public information about their dockets and operations is scarce. This Article brings municipal courts into the broader legal and scholarly conversation, offering the first comprehensive analysis of the enormous municipal court phenomenon. Nationwide, there are over 7,500 such courts in thirty states. Collectively they process over three and a half million criminal cases every year and collect at least two billion dollars in fines and fees. Created, funded, and controlled by local municipalities, these courts — sometimes referred to as “summary” or “justice” or “police” courts — are central to cities’ ability to police, to maintain public safety, and to raise revenue. At the same time, they often exhibit many of the dysfunctions for which lower courts have been generally criticized: cavalier speed, legal sloppiness, punitive harshness, and disrespectful treatment of defendants. Unlike their state counterparts, however, the U.S. Supreme Court has formally excused municipal courts from some basic legal constraints: judges need not be attorneys and may simultaneously serve as city mayors, while proceedings are often summary and not of record. These hybrid institutions thus pose thorny conceptual challenges: they are stand-alone judicial entities that are also arms of municipal government operating under reduced constitutional constraints as they mete out criminal convictions. As such, they create numerous tensions with modern norms of due process, judicial independence, and other traditional indicia of criminal court integrity.This Article provides a framework for appreciating the institutional complexity of this lowest tier of American criminal justice. Municipal courts deviate substantially from the classic model of courts as neutral, independent guardians of law. They are also vehicles for cities to express their political autonomy and redistribute wealth, and thus constitute underappreciated engines of local governance. As criminal adjudicators, they quietly contribute to localized mass incarceration while threatening the integrity of some foundational features of the criminal process. At the same time, they represent a potentially attractive opportunity to render criminal institutions more locally responsive. Finally, they reveal a deep dynamic at the bottom of the penal pyramid: low-status cases and institutions exert a formative influence over law itself. These complexities make reform especially challenging. There are doctrinal reforms that could strengthen municipal court operations, but they are inherently limited. The deeper reform would be to stop dismissing these courts as minor, inferior institutions and to take them and their millions of defendants seriously across the board of law, policy, and politics. Widely influential, jurisprudentially challenging, and democratically complicated, municipal courts deserve a more central place in the modern legal conversation. For the data collected for this Article and more information about the Municipal Courts Project, or to contact the author, please visit www.municipalcourts.org."
  }
  constructor() { }

  ngOnInit(): void {
  }


}
