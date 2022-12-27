// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CopySuccessBulkSvg from '@ant-design/icons-svg/lib/asn/CopySuccessBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CopySuccessBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CopySuccessBulk: CopySuccessBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CopySuccessBulkSvg}></AntdIcon>;
};

CopySuccessBulk.displayName = 'CopySuccessBulk';
CopySuccessBulk.inheritAttrs = false;
export default CopySuccessBulk;