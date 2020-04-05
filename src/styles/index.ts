// http://github.com/dvkndn/typed-tailwind
export const Tw = (): Tailwind => new Tailwind();

class Tailwind {
  value = "";

  // Getter methods
  // Why "$":
  // - https://github.com/microsoft/TypeScript/issues/2361
  // - https://github.com/microsoft/TypeScript/issues/4538
  // - https://en.wikipedia.org/wiki/Regular_expression
  $(): string { return this.value; }
  [Symbol.toPrimitive](): string { return this.$(); }

  // Building methods
  private add(value: string): Tailwind {
    this.value = `${this.value} ${value}`;
    return this;
  }

  // Styling methods
  textCbd(): Tailwind { return this.add("text-CBD"); }
  textA0A(): Tailwind { return this.add("text-A0A"); }
  text2D3(): Tailwind { return this.add("text-2D3"); }
  hoverTextCbd(): Tailwind { return this.add("hover___text-CBD"); }
  hoverTextA0A(): Tailwind { return this.add("hover___text-A0A"); }
  hoverText2D3(): Tailwind { return this.add("hover___text-2D3"); }
  bgFff(): Tailwind { return this.add("bg-FFF"); }
  bgF7F(): Tailwind { return this.add("bg-F7F"); }
  shadow8(): Tailwind { return this.add("shadow-8"); }
  borderSolid(): Tailwind { return this.add("border-solid"); }
  borderDashed(): Tailwind { return this.add("border-dashed"); }
  borderDotted(): Tailwind { return this.add("border-dotted"); }
  borderDouble(): Tailwind { return this.add("border-double"); }
  borderNone(): Tailwind { return this.add("border-none"); }
  borderE2E(): Tailwind { return this.add("border-E2E"); }
  borderCbd(): Tailwind { return this.add("border-CBD"); }
  border1(): Tailwind { return this.add("border-1"); }
  borderT1(): Tailwind { return this.add("border-t-1"); }
  borderR1(): Tailwind { return this.add("border-r-1"); }
  borderB1(): Tailwind { return this.add("border-b-1"); }
  borderL1(): Tailwind { return this.add("border-l-1"); }
  block(): Tailwind { return this.add("block"); }
  inlineBlock(): Tailwind { return this.add("inline-block"); }
  inline(): Tailwind { return this.add("inline"); }
  flex(): Tailwind { return this.add("flex"); }
  inlineFlex(): Tailwind { return this.add("inline-flex"); }
  table(): Tailwind { return this.add("table"); }
  tableRow(): Tailwind { return this.add("table-row"); }
  tableCell(): Tailwind { return this.add("table-cell"); }
  hidden(): Tailwind { return this.add("hidden"); }
  w320(): Tailwind { return this.add("w-320"); }
  w640(): Tailwind { return this.add("w-640"); }
  wFull(): Tailwind { return this.add("w-full"); }
  maxW800(): Tailwind { return this.add("max-w-800"); }
  maxWNone(): Tailwind { return this.add("max-w-none"); }
  p18(): Tailwind { return this.add("p-18"); }
  p36(): Tailwind { return this.add("p-36"); }
  p72(): Tailwind { return this.add("p-72"); }
  py18(): Tailwind { return this.add("py-18"); }
  px18(): Tailwind { return this.add("px-18"); }
  py36(): Tailwind { return this.add("py-36"); }
  px36(): Tailwind { return this.add("px-36"); }
  py72(): Tailwind { return this.add("py-72"); }
  px72(): Tailwind { return this.add("px-72"); }
  pt18(): Tailwind { return this.add("pt-18"); }
  pr18(): Tailwind { return this.add("pr-18"); }
  pb18(): Tailwind { return this.add("pb-18"); }
  pl18(): Tailwind { return this.add("pl-18"); }
  pt36(): Tailwind { return this.add("pt-36"); }
  pr36(): Tailwind { return this.add("pr-36"); }
  pb36(): Tailwind { return this.add("pb-36"); }
  pl36(): Tailwind { return this.add("pl-36"); }
  pt72(): Tailwind { return this.add("pt-72"); }
  pr72(): Tailwind { return this.add("pr-72"); }
  pb72(): Tailwind { return this.add("pb-72"); }
  pl72(): Tailwind { return this.add("pl-72"); }
  m18(): Tailwind { return this.add("m-18"); }
  m24(): Tailwind { return this.add("m-24"); }
  m36(): Tailwind { return this.add("m-36"); }
  m48(): Tailwind { return this.add("m-48"); }
  my18(): Tailwind { return this.add("my-18"); }
  mx18(): Tailwind { return this.add("mx-18"); }
  my24(): Tailwind { return this.add("my-24"); }
  mx24(): Tailwind { return this.add("mx-24"); }
  my36(): Tailwind { return this.add("my-36"); }
  mx36(): Tailwind { return this.add("mx-36"); }
  my48(): Tailwind { return this.add("my-48"); }
  mx48(): Tailwind { return this.add("mx-48"); }
  mt18(): Tailwind { return this.add("mt-18"); }
  mr18(): Tailwind { return this.add("mr-18"); }
  mb18(): Tailwind { return this.add("mb-18"); }
  ml18(): Tailwind { return this.add("ml-18"); }
  mt24(): Tailwind { return this.add("mt-24"); }
  mr24(): Tailwind { return this.add("mr-24"); }
  mb24(): Tailwind { return this.add("mb-24"); }
  ml24(): Tailwind { return this.add("ml-24"); }
  mt36(): Tailwind { return this.add("mt-36"); }
  mr36(): Tailwind { return this.add("mr-36"); }
  mb36(): Tailwind { return this.add("mb-36"); }
  ml36(): Tailwind { return this.add("ml-36"); }
  mt48(): Tailwind { return this.add("mt-48"); }
  mr48(): Tailwind { return this.add("mr-48"); }
  mb48(): Tailwind { return this.add("mb-48"); }
  ml48(): Tailwind { return this.add("ml-48"); }
  flex1(): Tailwind { return this.add("flex-1"); }
  flexAuto(): Tailwind { return this.add("flex-auto"); }
  flexInitial(): Tailwind { return this.add("flex-initial"); }
  flexNone(): Tailwind { return this.add("flex-none"); }
  flexWrap(): Tailwind { return this.add("flex-wrap"); }
  flexWrapReverse(): Tailwind { return this.add("flex-wrap-reverse"); }
  flexNoWrap(): Tailwind { return this.add("flex-no-wrap"); }
  justifyStart(): Tailwind { return this.add("justify-start"); }
  justifyEnd(): Tailwind { return this.add("justify-end"); }
  justifyCenter(): Tailwind { return this.add("justify-center"); }
  justifyBetween(): Tailwind { return this.add("justify-between"); }
  justifyAround(): Tailwind { return this.add("justify-around"); }
  itemsStart(): Tailwind { return this.add("items-start"); }
  itemsEnd(): Tailwind { return this.add("items-end"); }
  itemsCenter(): Tailwind { return this.add("items-center"); }
  itemsBaseline(): Tailwind { return this.add("items-baseline"); }
  itemsStretch(): Tailwind { return this.add("items-stretch"); }
  text18(): Tailwind { return this.add("text-18"); }
  text24(): Tailwind { return this.add("text-24"); }
  text72(): Tailwind { return this.add("text-72"); }
  leading18(): Tailwind { return this.add("leading-18"); }
  leading24(): Tailwind { return this.add("leading-24"); }
  leading30(): Tailwind { return this.add("leading-30"); }
  leading36(): Tailwind { return this.add("leading-36"); }
  leading96(): Tailwind { return this.add("leading-96"); }
  leadingNone(): Tailwind { return this.add("leading-none"); }
  fontSemibold(): Tailwind { return this.add("font-semibold"); }
  fontNormal(): Tailwind { return this.add("font-normal"); }
  whitespaceNormal(): Tailwind { return this.add("whitespace-normal"); }
  whitespaceNoWrap(): Tailwind { return this.add("whitespace-no-wrap"); }
  whitespacePre(): Tailwind { return this.add("whitespace-pre"); }
  whitespacePreLine(): Tailwind { return this.add("whitespace-pre-line"); }
  whitespacePreWrap(): Tailwind { return this.add("whitespace-pre-wrap"); }
  underline(): Tailwind { return this.add("underline"); }
  lineThrough(): Tailwind { return this.add("line-through"); }
  noUnderline(): Tailwind { return this.add("no-underline"); }
  lt1280W320(): Tailwind { return this.add("lt1280___w-320"); }
  lt1280W640(): Tailwind { return this.add("lt1280___w-640"); }
  lt1280WFull(): Tailwind { return this.add("lt1280___w-full"); }
  lt1280MaxW800(): Tailwind { return this.add("lt1280___max-w-800"); }
  lt1280MaxWNone(): Tailwind { return this.add("lt1280___max-w-none"); }
  lt1280P18(): Tailwind { return this.add("lt1280___p-18"); }
  lt1280P36(): Tailwind { return this.add("lt1280___p-36"); }
  lt1280P72(): Tailwind { return this.add("lt1280___p-72"); }
  lt1280Py18(): Tailwind { return this.add("lt1280___py-18"); }
  lt1280Px18(): Tailwind { return this.add("lt1280___px-18"); }
  lt1280Py36(): Tailwind { return this.add("lt1280___py-36"); }
  lt1280Px36(): Tailwind { return this.add("lt1280___px-36"); }
  lt1280Py72(): Tailwind { return this.add("lt1280___py-72"); }
  lt1280Px72(): Tailwind { return this.add("lt1280___px-72"); }
  lt1280Pt18(): Tailwind { return this.add("lt1280___pt-18"); }
  lt1280Pr18(): Tailwind { return this.add("lt1280___pr-18"); }
  lt1280Pb18(): Tailwind { return this.add("lt1280___pb-18"); }
  lt1280Pl18(): Tailwind { return this.add("lt1280___pl-18"); }
  lt1280Pt36(): Tailwind { return this.add("lt1280___pt-36"); }
  lt1280Pr36(): Tailwind { return this.add("lt1280___pr-36"); }
  lt1280Pb36(): Tailwind { return this.add("lt1280___pb-36"); }
  lt1280Pl36(): Tailwind { return this.add("lt1280___pl-36"); }
  lt1280Pt72(): Tailwind { return this.add("lt1280___pt-72"); }
  lt1280Pr72(): Tailwind { return this.add("lt1280___pr-72"); }
  lt1280Pb72(): Tailwind { return this.add("lt1280___pb-72"); }
  lt1280Pl72(): Tailwind { return this.add("lt1280___pl-72"); }
  lt1280Flex1(): Tailwind { return this.add("lt1280___flex-1"); }
  lt1280FlexAuto(): Tailwind { return this.add("lt1280___flex-auto"); }
  lt1280FlexInitial(): Tailwind { return this.add("lt1280___flex-initial"); }
  lt1280FlexNone(): Tailwind { return this.add("lt1280___flex-none"); }
  lt960W320(): Tailwind { return this.add("lt960___w-320"); }
  lt960W640(): Tailwind { return this.add("lt960___w-640"); }
  lt960WFull(): Tailwind { return this.add("lt960___w-full"); }
  lt960MaxW800(): Tailwind { return this.add("lt960___max-w-800"); }
  lt960MaxWNone(): Tailwind { return this.add("lt960___max-w-none"); }
  lt960P18(): Tailwind { return this.add("lt960___p-18"); }
  lt960P36(): Tailwind { return this.add("lt960___p-36"); }
  lt960P72(): Tailwind { return this.add("lt960___p-72"); }
  lt960Py18(): Tailwind { return this.add("lt960___py-18"); }
  lt960Px18(): Tailwind { return this.add("lt960___px-18"); }
  lt960Py36(): Tailwind { return this.add("lt960___py-36"); }
  lt960Px36(): Tailwind { return this.add("lt960___px-36"); }
  lt960Py72(): Tailwind { return this.add("lt960___py-72"); }
  lt960Px72(): Tailwind { return this.add("lt960___px-72"); }
  lt960Pt18(): Tailwind { return this.add("lt960___pt-18"); }
  lt960Pr18(): Tailwind { return this.add("lt960___pr-18"); }
  lt960Pb18(): Tailwind { return this.add("lt960___pb-18"); }
  lt960Pl18(): Tailwind { return this.add("lt960___pl-18"); }
  lt960Pt36(): Tailwind { return this.add("lt960___pt-36"); }
  lt960Pr36(): Tailwind { return this.add("lt960___pr-36"); }
  lt960Pb36(): Tailwind { return this.add("lt960___pb-36"); }
  lt960Pl36(): Tailwind { return this.add("lt960___pl-36"); }
  lt960Pt72(): Tailwind { return this.add("lt960___pt-72"); }
  lt960Pr72(): Tailwind { return this.add("lt960___pr-72"); }
  lt960Pb72(): Tailwind { return this.add("lt960___pb-72"); }
  lt960Pl72(): Tailwind { return this.add("lt960___pl-72"); }
  lt960Flex1(): Tailwind { return this.add("lt960___flex-1"); }
  lt960FlexAuto(): Tailwind { return this.add("lt960___flex-auto"); }
  lt960FlexInitial(): Tailwind { return this.add("lt960___flex-initial"); }
  lt960FlexNone(): Tailwind { return this.add("lt960___flex-none"); }
}
