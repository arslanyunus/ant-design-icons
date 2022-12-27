// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CakeBoldSvg from '@ant-design/icons-svg/lib/asn/CakeBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CakeBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CakeBold: CakeBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CakeBoldSvg}></AntdIcon>;
};

CakeBold.displayName = 'CakeBold';
CakeBold.inheritAttrs = false;
export default CakeBold;