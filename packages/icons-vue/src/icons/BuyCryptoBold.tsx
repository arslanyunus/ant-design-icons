// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BuyCryptoBoldSvg from '@ant-design/icons-svg/lib/asn/BuyCryptoBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BuyCryptoBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BuyCryptoBold: BuyCryptoBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BuyCryptoBoldSvg}></AntdIcon>;
};

BuyCryptoBold.displayName = 'BuyCryptoBold';
BuyCryptoBold.inheritAttrs = false;
export default BuyCryptoBold;