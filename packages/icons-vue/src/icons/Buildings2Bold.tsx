// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Buildings2BoldSvg from '@ant-design/icons-svg/lib/asn/Buildings2Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Buildings2BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Buildings2Bold: Buildings2BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Buildings2BoldSvg}></AntdIcon>;
};

Buildings2Bold.displayName = 'Buildings2Bold';
Buildings2Bold.inheritAttrs = false;
export default Buildings2Bold;