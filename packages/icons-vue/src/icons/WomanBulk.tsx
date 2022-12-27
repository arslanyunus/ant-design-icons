// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WomanBulkSvg from '@ant-design/icons-svg/lib/asn/WomanBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WomanBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WomanBulk: WomanBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WomanBulkSvg}></AntdIcon>;
};

WomanBulk.displayName = 'WomanBulk';
WomanBulk.inheritAttrs = false;
export default WomanBulk;