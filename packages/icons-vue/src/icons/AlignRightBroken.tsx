// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AlignRightBrokenSvg from '@ant-design/icons-svg/lib/asn/AlignRightBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AlignRightBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AlignRightBroken: AlignRightBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AlignRightBrokenSvg}></AntdIcon>;
};

AlignRightBroken.displayName = 'AlignRightBroken';
AlignRightBroken.inheritAttrs = false;
export default AlignRightBroken;