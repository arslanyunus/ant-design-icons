// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloseCircleOutlineSvg from '@ant-design/icons-svg/lib/asn/CloseCircleOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloseCircleOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloseCircleOutline: CloseCircleOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloseCircleOutlineSvg}></AntdIcon>;
};

CloseCircleOutline.displayName = 'CloseCircleOutline';
CloseCircleOutline.inheritAttrs = false;
export default CloseCircleOutline;