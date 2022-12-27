// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CopySuccessBoldSvg from '@ant-design/icons-svg/lib/asn/CopySuccessBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CopySuccessBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CopySuccessBold: CopySuccessBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CopySuccessBoldSvg}></AntdIcon>;
};

CopySuccessBold.displayName = 'CopySuccessBold';
CopySuccessBold.inheritAttrs = false;
export default CopySuccessBold;