// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AlignBottomBrokenSvg from '@ant-design/icons-svg/lib/asn/AlignBottomBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AlignBottomBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AlignBottomBroken: AlignBottomBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AlignBottomBrokenSvg}></AntdIcon>;
};

AlignBottomBroken.displayName = 'AlignBottomBroken';
AlignBottomBroken.inheritAttrs = false;
export default AlignBottomBroken;