// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CopyBulkSvg from '@ant-design/icons-svg/lib/asn/CopyBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CopyBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CopyBulk: CopyBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CopyBulkSvg}></AntdIcon>;
};

CopyBulk.displayName = 'CopyBulk';
CopyBulk.inheritAttrs = false;
export default CopyBulk;