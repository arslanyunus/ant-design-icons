// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HomeHashtagBoldSvg from '@ant-design/icons-svg/lib/asn/HomeHashtagBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HomeHashtagBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HomeHashtagBold: HomeHashtagBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HomeHashtagBoldSvg}></AntdIcon>;
};

HomeHashtagBold.displayName = 'HomeHashtagBold';
HomeHashtagBold.inheritAttrs = false;
export default HomeHashtagBold;