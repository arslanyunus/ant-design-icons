// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BuyCryptoBrokenSvg from '@ant-design/icons-svg/lib/asn/BuyCryptoBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BuyCryptoBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BuyCryptoBroken: BuyCryptoBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BuyCryptoBrokenSvg}></AntdIcon>;
};

BuyCryptoBroken.displayName = 'BuyCryptoBroken';
BuyCryptoBroken.inheritAttrs = false;
export default BuyCryptoBroken;