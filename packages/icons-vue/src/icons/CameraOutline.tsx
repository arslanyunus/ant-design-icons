// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CameraOutlineSvg from '@ant-design/icons-svg/lib/asn/CameraOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CameraOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CameraOutline: CameraOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CameraOutlineSvg}></AntdIcon>;
};

CameraOutline.displayName = 'CameraOutline';
CameraOutline.inheritAttrs = false;
export default CameraOutline;