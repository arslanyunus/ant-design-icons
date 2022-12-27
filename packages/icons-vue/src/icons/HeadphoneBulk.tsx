// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HeadphoneBulkSvg from '@ant-design/icons-svg/lib/asn/HeadphoneBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HeadphoneBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HeadphoneBulk: HeadphoneBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeadphoneBulkSvg}></AntdIcon>;
};

HeadphoneBulk.displayName = 'HeadphoneBulk';
HeadphoneBulk.inheritAttrs = false;
export default HeadphoneBulk;