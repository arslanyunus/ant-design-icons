// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CopySuccessBrokenSvg from '@ant-design/icons-svg/lib/asn/CopySuccessBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CopySuccessBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CopySuccessBroken: CopySuccessBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CopySuccessBrokenSvg}></AntdIcon>;
};

CopySuccessBroken.displayName = 'CopySuccessBroken';
CopySuccessBroken.inheritAttrs = false;
export default CopySuccessBroken;