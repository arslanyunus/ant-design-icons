// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CubeScan3DBoldSvg from '@ant-design/icons-svg/lib/asn/CubeScan3DBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CubeScan3DBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CubeScan3DBold: CubeScan3DBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CubeScan3DBoldSvg}></AntdIcon>;
};

CubeScan3DBold.displayName = 'CubeScan3DBold';
CubeScan3DBold.inheritAttrs = false;
export default CubeScan3DBold;