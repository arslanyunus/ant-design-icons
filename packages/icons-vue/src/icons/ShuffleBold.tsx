// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShuffleBoldSvg from '@ant-design/icons-svg/lib/asn/ShuffleBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShuffleBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShuffleBold: ShuffleBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShuffleBoldSvg}></AntdIcon>;
};

ShuffleBold.displayName = 'ShuffleBold';
ShuffleBold.inheritAttrs = false;
export default ShuffleBold;