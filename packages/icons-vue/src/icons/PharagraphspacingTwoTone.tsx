// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PharagraphspacingTwoToneSvg from '@ant-design/icons-svg/lib/asn/PharagraphspacingTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PharagraphspacingTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PharagraphspacingTwoTone: PharagraphspacingTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PharagraphspacingTwoToneSvg}></AntdIcon>;
};

PharagraphspacingTwoTone.displayName = 'PharagraphspacingTwoTone';
PharagraphspacingTwoTone.inheritAttrs = false;
export default PharagraphspacingTwoTone;