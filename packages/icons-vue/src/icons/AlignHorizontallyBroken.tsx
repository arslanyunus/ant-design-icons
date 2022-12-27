// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AlignHorizontallyBrokenSvg from '@ant-design/icons-svg/lib/asn/AlignHorizontallyBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AlignHorizontallyBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AlignHorizontallyBroken: AlignHorizontallyBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AlignHorizontallyBrokenSvg}></AntdIcon>;
};

AlignHorizontallyBroken.displayName = 'AlignHorizontallyBroken';
AlignHorizontallyBroken.inheritAttrs = false;
export default AlignHorizontallyBroken;