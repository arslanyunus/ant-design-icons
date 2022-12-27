// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PharagraphspacingOutlineSvg from '@ant-design/icons-svg/lib/asn/PharagraphspacingOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PharagraphspacingOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PharagraphspacingOutline: PharagraphspacingOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PharagraphspacingOutlineSvg}></AntdIcon>;
};

PharagraphspacingOutline.displayName = 'PharagraphspacingOutline';
PharagraphspacingOutline.inheritAttrs = false;
export default PharagraphspacingOutline;