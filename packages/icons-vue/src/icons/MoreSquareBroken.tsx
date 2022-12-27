// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoreSquareBrokenSvg from '@ant-design/icons-svg/lib/asn/MoreSquareBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoreSquareBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoreSquareBroken: MoreSquareBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoreSquareBrokenSvg}></AntdIcon>;
};

MoreSquareBroken.displayName = 'MoreSquareBroken';
MoreSquareBroken.inheritAttrs = false;
export default MoreSquareBroken;