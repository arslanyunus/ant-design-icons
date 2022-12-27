// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CupBulkSvg from '@ant-design/icons-svg/lib/asn/CupBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CupBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CupBulk: CupBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CupBulkSvg}></AntdIcon>;
};

CupBulk.displayName = 'CupBulk';
CupBulk.inheritAttrs = false;
export default CupBulk;