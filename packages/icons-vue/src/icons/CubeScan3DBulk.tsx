// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CubeScan3DBulkSvg from '@ant-design/icons-svg/lib/asn/CubeScan3DBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CubeScan3DBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CubeScan3DBulk: CubeScan3DBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CubeScan3DBulkSvg}></AntdIcon>;
};

CubeScan3DBulk.displayName = 'CubeScan3DBulk';
CubeScan3DBulk.inheritAttrs = false;
export default CubeScan3DBulk;