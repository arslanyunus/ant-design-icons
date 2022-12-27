// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PharagraphspacingBoldSvg from '@ant-design/icons-svg/lib/asn/PharagraphspacingBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PharagraphspacingBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PharagraphspacingBold: PharagraphspacingBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PharagraphspacingBoldSvg}></AntdIcon>;
};

PharagraphspacingBold.displayName = 'PharagraphspacingBold';
PharagraphspacingBold.inheritAttrs = false;
export default PharagraphspacingBold;