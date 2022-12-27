// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ConvertCardTwoToneSvg from '@ant-design/icons-svg/lib/asn/ConvertCardTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ConvertCardTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ConvertCardTwoTone: ConvertCardTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ConvertCardTwoToneSvg}></AntdIcon>;
};

ConvertCardTwoTone.displayName = 'ConvertCardTwoTone';
ConvertCardTwoTone.inheritAttrs = false;
export default ConvertCardTwoTone;