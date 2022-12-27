// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PharagraphspacingBrokenSvg from '@ant-design/icons-svg/lib/asn/PharagraphspacingBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PharagraphspacingBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PharagraphspacingBroken: PharagraphspacingBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PharagraphspacingBrokenSvg}></AntdIcon>;
};

PharagraphspacingBroken.displayName = 'PharagraphspacingBroken';
PharagraphspacingBroken.inheritAttrs = false;
export default PharagraphspacingBroken;