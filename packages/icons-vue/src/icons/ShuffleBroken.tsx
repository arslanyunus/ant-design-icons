// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShuffleBrokenSvg from '@ant-design/icons-svg/lib/asn/ShuffleBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShuffleBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShuffleBroken: ShuffleBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShuffleBrokenSvg}></AntdIcon>;
};

ShuffleBroken.displayName = 'ShuffleBroken';
ShuffleBroken.inheritAttrs = false;
export default ShuffleBroken;