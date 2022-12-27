// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Hashtag1LinearSvg from '@ant-design/icons-svg/lib/asn/Hashtag1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Hashtag1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Hashtag1Linear: Hashtag1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Hashtag1LinearSvg}></AntdIcon>;
};

Hashtag1Linear.displayName = 'Hashtag1Linear';
Hashtag1Linear.inheritAttrs = false;
export default Hashtag1Linear;