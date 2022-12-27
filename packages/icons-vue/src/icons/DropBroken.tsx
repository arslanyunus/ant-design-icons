// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DropBrokenSvg from '@ant-design/icons-svg/lib/asn/DropBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DropBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DropBroken: DropBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DropBrokenSvg}></AntdIcon>;
};

DropBroken.displayName = 'DropBroken';
DropBroken.inheritAttrs = false;
export default DropBroken;