// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloseCircleBulkSvg from '@ant-design/icons-svg/lib/asn/CloseCircleBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloseCircleBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloseCircleBulk: CloseCircleBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloseCircleBulkSvg}></AntdIcon>;
};

CloseCircleBulk.displayName = 'CloseCircleBulk';
CloseCircleBulk.inheritAttrs = false;
export default CloseCircleBulk;