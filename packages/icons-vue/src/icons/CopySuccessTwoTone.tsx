// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CopySuccessTwoToneSvg from '@ant-design/icons-svg/lib/asn/CopySuccessTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CopySuccessTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CopySuccessTwoTone: CopySuccessTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CopySuccessTwoToneSvg}></AntdIcon>;
};

CopySuccessTwoTone.displayName = 'CopySuccessTwoTone';
CopySuccessTwoTone.inheritAttrs = false;
export default CopySuccessTwoTone;