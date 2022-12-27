// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BuyCryptoBulkSvg from '@ant-design/icons-svg/lib/asn/BuyCryptoBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BuyCryptoBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BuyCryptoBulk: BuyCryptoBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BuyCryptoBulkSvg}></AntdIcon>;
};

BuyCryptoBulk.displayName = 'BuyCryptoBulk';
BuyCryptoBulk.inheritAttrs = false;
export default BuyCryptoBulk;