// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloseCircleBoldSvg from '@ant-design/icons-svg/lib/asn/CloseCircleBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloseCircleBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloseCircleBold: CloseCircleBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloseCircleBoldSvg}></AntdIcon>;
};

CloseCircleBold.displayName = 'CloseCircleBold';
CloseCircleBold.inheritAttrs = false;
export default CloseCircleBold;