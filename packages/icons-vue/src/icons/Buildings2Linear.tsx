// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Buildings2LinearSvg from '@ant-design/icons-svg/lib/asn/Buildings2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Buildings2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Buildings2Linear: Buildings2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Buildings2LinearSvg}></AntdIcon>;
};

Buildings2Linear.displayName = 'Buildings2Linear';
Buildings2Linear.inheritAttrs = false;
export default Buildings2Linear;