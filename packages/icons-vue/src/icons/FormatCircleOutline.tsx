// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FormatCircleOutlineSvg from '@ant-design/icons-svg/lib/asn/FormatCircleOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FormatCircleOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FormatCircleOutline: FormatCircleOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FormatCircleOutlineSvg}></AntdIcon>;
};

FormatCircleOutline.displayName = 'FormatCircleOutline';
FormatCircleOutline.inheritAttrs = false;
export default FormatCircleOutline;