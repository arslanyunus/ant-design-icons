// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FormatCircleBoldSvg from '@ant-design/icons-svg/lib/asn/FormatCircleBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FormatCircleBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FormatCircleBold: FormatCircleBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FormatCircleBoldSvg}></AntdIcon>;
};

FormatCircleBold.displayName = 'FormatCircleBold';
FormatCircleBold.inheritAttrs = false;
export default FormatCircleBold;