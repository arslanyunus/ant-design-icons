// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReceivedOutlineSvg from '@ant-design/icons-svg/lib/asn/ReceivedOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReceivedOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReceivedOutline: ReceivedOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReceivedOutlineSvg}></AntdIcon>;
};

ReceivedOutline.displayName = 'ReceivedOutline';
ReceivedOutline.inheritAttrs = false;
export default ReceivedOutline;