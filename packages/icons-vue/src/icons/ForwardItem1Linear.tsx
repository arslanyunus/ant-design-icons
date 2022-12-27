// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ForwardItem1LinearSvg from '@ant-design/icons-svg/lib/asn/ForwardItem1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ForwardItem1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ForwardItem1Linear: ForwardItem1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ForwardItem1LinearSvg}></AntdIcon>;
};

ForwardItem1Linear.displayName = 'ForwardItem1Linear';
ForwardItem1Linear.inheritAttrs = false;
export default ForwardItem1Linear;