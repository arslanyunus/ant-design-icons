// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AirdropBulkSvg from '@ant-design/icons-svg/lib/asn/AirdropBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AirdropBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AirdropBulk: AirdropBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AirdropBulkSvg}></AntdIcon>;
};

AirdropBulk.displayName = 'AirdropBulk';
AirdropBulk.inheritAttrs = false;
export default AirdropBulk;