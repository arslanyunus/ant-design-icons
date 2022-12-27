// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Hashtag1BoldSvg from '@ant-design/icons-svg/lib/asn/Hashtag1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Hashtag1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Hashtag1Bold: Hashtag1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Hashtag1BoldSvg}></AntdIcon>;
};

Hashtag1Bold.displayName = 'Hashtag1Bold';
Hashtag1Bold.inheritAttrs = false;
export default Hashtag1Bold;