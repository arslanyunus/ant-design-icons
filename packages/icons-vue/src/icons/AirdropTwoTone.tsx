// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AirdropTwoToneSvg from '@ant-design/icons-svg/lib/asn/AirdropTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AirdropTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AirdropTwoTone: AirdropTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AirdropTwoToneSvg}></AntdIcon>;
};

AirdropTwoTone.displayName = 'AirdropTwoTone';
AirdropTwoTone.inheritAttrs = false;
export default AirdropTwoTone;