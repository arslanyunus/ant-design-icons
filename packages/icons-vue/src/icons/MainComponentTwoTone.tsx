// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MainComponentTwoToneSvg from '@ant-design/icons-svg/lib/asn/MainComponentTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MainComponentTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MainComponentTwoTone: MainComponentTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MainComponentTwoToneSvg}></AntdIcon>;
};

MainComponentTwoTone.displayName = 'MainComponentTwoTone';
MainComponentTwoTone.inheritAttrs = false;
export default MainComponentTwoTone;