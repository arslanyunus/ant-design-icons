// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FormatCircleBrokenSvg from '@ant-design/icons-svg/lib/asn/FormatCircleBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FormatCircleBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FormatCircleBroken: FormatCircleBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FormatCircleBrokenSvg}></AntdIcon>;
};

FormatCircleBroken.displayName = 'FormatCircleBroken';
FormatCircleBroken.inheritAttrs = false;
export default FormatCircleBroken;