// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CubeScan3DBrokenSvg from '@ant-design/icons-svg/lib/asn/CubeScan3DBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CubeScan3DBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CubeScan3DBroken: CubeScan3DBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CubeScan3DBrokenSvg}></AntdIcon>;
};

CubeScan3DBroken.displayName = 'CubeScan3DBroken';
CubeScan3DBroken.inheritAttrs = false;
export default CubeScan3DBroken;