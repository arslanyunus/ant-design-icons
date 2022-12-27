// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CreativeCommonsTwoToneSvg from '@ant-design/icons-svg/lib/asn/CreativeCommonsTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CreativeCommonsTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CreativeCommonsTwoTone: CreativeCommonsTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CreativeCommonsTwoToneSvg}></AntdIcon>;
};

CreativeCommonsTwoTone.displayName = 'CreativeCommonsTwoTone';
CreativeCommonsTwoTone.inheritAttrs = false;
export default CreativeCommonsTwoTone;