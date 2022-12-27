// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CdBulkSvg from '@ant-design/icons-svg/lib/asn/CdBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CdBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CdBulk: CdBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CdBulkSvg}></AntdIcon>;
};

CdBulk.displayName = 'CdBulk';
CdBulk.inheritAttrs = false;
export default CdBulk;