// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BoxAddTwoToneSvg from '@ant-design/icons-svg/lib/asn/BoxAddTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BoxAddTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BoxAddTwoTone: BoxAddTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BoxAddTwoToneSvg}></AntdIcon>;
};

BoxAddTwoTone.displayName = 'BoxAddTwoTone';
BoxAddTwoTone.inheritAttrs = false;
export default BoxAddTwoTone;