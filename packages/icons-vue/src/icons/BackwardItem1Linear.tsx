// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BackwardItem1LinearSvg from '@ant-design/icons-svg/lib/asn/BackwardItem1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BackwardItem1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BackwardItem1Linear: BackwardItem1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BackwardItem1LinearSvg}></AntdIcon>;
};

BackwardItem1Linear.displayName = 'BackwardItem1Linear';
BackwardItem1Linear.inheritAttrs = false;
export default BackwardItem1Linear;