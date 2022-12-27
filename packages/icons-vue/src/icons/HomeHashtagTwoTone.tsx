// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HomeHashtagTwoToneSvg from '@ant-design/icons-svg/lib/asn/HomeHashtagTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HomeHashtagTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HomeHashtagTwoTone: HomeHashtagTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HomeHashtagTwoToneSvg}></AntdIcon>;
};

HomeHashtagTwoTone.displayName = 'HomeHashtagTwoTone';
HomeHashtagTwoTone.inheritAttrs = false;
export default HomeHashtagTwoTone;